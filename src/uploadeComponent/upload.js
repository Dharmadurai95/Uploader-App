import React, { Component } from 'react'
import { CSVReader } from 'react-papaparse';
import './uploader.css';
import parse from 'html-react-parser';
import Modal from './modalComponent/modal';
import { Pagination } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import MyResponsiveBar from '../chart/chart';


export default class Uploader extends Component {
    state = {
        csvCollection: '',
        singleImageSource: '',
        filesPerPage: 10,
        currentPageNo: 1,
        topList: '',
        currentPost: '',
        chart: false,
        highlighCode: false,
        titleName: ''
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.top !== this.state.topList) {
            this.renderTableHeadData();
        }

    }


    //csv file drop handler
    handleOnDrop = (data) => {
        this.setState({
            csvCollection: data,
            loading: ''
        })

    }
    //pagenumber and  post per page functionality 

    pageNumberHandler = () => {
        let [...data] = this.state.csvCollection;
        let remainData;
        remainData = data.slice(3)
        if (this.state.topList) {
            remainData = data.slice(2)

        }
        let { filesPerPage, currentPageNo } = this.state;


        let indexOfFirstFile, indexOfLastFile, currentPost;
        indexOfLastFile = filesPerPage * currentPageNo;
        indexOfFirstFile = indexOfLastFile - filesPerPage;
        currentPost = remainData.slice(indexOfFirstFile, indexOfLastFile)
        return currentPost
    }

    //table body data functionality

    renderTableBodyData = () => {

        let currentPost = this.pageNumberHandler()

        //loop through the all incoming data and render the table formats 
        return currentPost.map((data, index) => {
            return (
                <tr key={`outerBody${index}`}>
                    {data.data.map((bodyValues, index) => {
                        if (parse(bodyValues).props && parse(bodyValues).props.children && this.state.highlighCode === false) {
                            return <td key={`innerBody${index}`} > {(parse(bodyValues).props.children)} </td>
                        }
                        if (parse(bodyValues).props && parse(bodyValues).props.children && this.state.highlighCode === true) {
                            return <td key={`innerBody${index}`} > {parse(bodyValues)} </td>
                        }
                        return <td key={`innerBody${index}`} > {(bodyValues)} </td>
                    })}
                </tr>
            )
        })
    }
    // table head data
    renderTableHeadData = () => {
        let [...head] = this.state.csvCollection;
        let topRows = head.slice(0, 3);
        let determineRows
        if (topRows && topRows[2] && topRows[2]['data']) {
            determineRows = topRows[2]['data'];
            if (!determineRows.every((dat) => (/<\/?[a-z][\s\S]*>/i.test(dat)))) {
                topRows = head.slice(0, 2)
                if (!this.state.topList) {
                    this.setState({ topList: true })
                }
            }
        }
        return topRows.map((data, index) => {
            return (
                <tr key={`outerHead${index}`}>
                    {data.data.map((innerData, indes) => {
                        if (/<\/?[a-z][\s\S]*>/i.test(innerData)) {
                            return (
                                <td
                                    key={uuidv4()}
                                    onClick={e => {
                                        e.preventDefault();
                                        let { props } = Object.assign({}, parse(innerData));
                                        this.openModal(props);
                                    }}
                                >
                                    {parse(innerData)}
                                </td>
                            );
                        }
                        return <td key={uuidv4()}>{innerData}</td>
                    })}
                </tr>
            )
        })

    }

    //csv file error hadler
    handleOnError = (err, file, inputElem, reason) => {
        console.log(err)
    }

    // csv file remove 
    handleOnRemoveFile = (data) => {
        console.log(data, 'removed')
        this.setState({
            csvCollection: '',
            topList: false

        })
    }

    //modal open handler functionality
    openModal = (openModal) => {
        if ((openModal && openModal.src) || (openModal && openModal.href)) {
            this.setState({
                singleImageSource: openModal
            })
        }

    }
    //modal close fucntionality
    closeModal = () => {
        this.setState({
            singleImageSource: ''
        })
    }

    //pagination handler 
    paginationHanlder = (page, pageSize) => {
        this.setState({
            filesPerPage: pageSize,
            currentPageNo: page
        })
    }

    //chart data functionality
    chartDataFunctionality = () => {
        const title = this.state.csvCollection

        let currentPost = this.pageNumberHandler()
        let chart = this.chardHanler(currentPost, title);

        let allowedField = [
            'Term',
            'NoEmp',
            'NewExist',
            'CreateJob',
            'RetainedJob',
            'UrbanRural',
            'DisbursementGross',
            'BalanceGross',
            'ChgOffPrinGr',
            'GrAppv',
            'SBA_Appv',
            'daysterm'
        ]
        let filterChart = [...chart]
        filterChart.map((val, ind) => {
            for (let key in filterChart[ind]) {
                if (allowedField.indexOf(key) === -1) {
                    delete filterChart[ind][key];
                }
            }
        })
        let chartCheck = filterChart[0];
        let dataCheck = allowedField[0]

        let filteredChartData = filterChart.map((filterCharData, index) => {
            if (chartCheck[dataCheck]) {

                return { ...filterCharData, Row: `Row ${index + 1}` }
            }
            return;

        })

        if (filteredChartData[0] !== undefined) {
            return <MyResponsiveBar data={filteredChartData} />
        }
        return <h2 className='noData'>There is no chart data here</h2>


    }

    //table chart handler
    chardHanler = (data, title) => {

        return data.map((val, index) => {

            let object = Object.assign({}, val.data);
            let obj = {}
            let finalValue = Object.values(object).map((v, index) => {
                if (!isNaN(v) && !undefined && (v < 100000)) {
                    let dataTitle = title[0]['data'][index];
                    if ((v >= 3000)) {
                        let convertOnePer = (v * 0.01);
                        let values = parseFloat(convertOnePer);
                        return obj[dataTitle] = values;
                    }
                    let values = parseFloat(v)
                    return obj[dataTitle] = values;

                }
            });


            return obj;
        })
    }
    render() {
        //button dynamic classes
        let chartClass = this.state.chart ? 'chartRed' : 'chartGreen';
        let codeHighLightClass = this.state.highlighCode ? 'DisableHightlight' : 'EnableHighlight';
        return (<div className='uploader'>
            <div className='uploaderCard' >
                <CSVReader
                    onDrop={this.handleOnDrop}
                    onError={this.handleOnError}
                    addRemoveButton
                    onRemoveFile={this.handleOnRemoveFile}
                >
                    <span>Click (Drop) Upload  Your  file</span>
                </CSVReader>
            </div>
            {this.state.csvCollection && <div>
                <button onClick={() => this.setState({ chart: !this.state.chart })} className={`Btn ${chartClass}`} >
                    {this.state.chart ? "Hide Chart" : "Show Chart"}
                </button>
                {this.state.chart ? this.chartDataFunctionality() : ''}

            </div>}
            {this.state.csvCollection && <div className='pagination'>
                <Pagination
                    total={this.state.csvCollection.length}
                    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                    defaultPageSize={10}
                    defaultCurrent={1}
                    pageSizeOptions={["10", "25", "50", "100", "500"]}
                    onChange={(page, pageSize) => this.paginationHanlder(page, pageSize)}
                />
                <button onClick={() => this.setState({ highlighCode: !this.state.highlighCode })}
                    className={`Btn clrbtn ${codeHighLightClass}`}>
                    {this.state.highlighCode ? 'Disable Hightlight' : "Hightlight Data"}
                </button>
            </div>}
            <div className='tableData' key={"table"}>
                {this.state.csvCollection && (
                    <>


                        <table className='table'>
                            <thead key={'theadHead'}>
                                {this.renderTableHeadData()}
                            </thead>
                            <tbody key={"theadBody"}>
                                {this.renderTableBodyData()}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
            {this.state.singleImageSource ? <Modal close={this.closeModal}>{(this.state.singleImageSource)}</Modal> : ''}
        </div>
        )
    }
}