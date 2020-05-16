import React from 'react';
import '../scss/results.scss';

class FileResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        let id = 1;
        let listItems = this.props.data.map((file) => {
            if (file.categories) {
                return (<tr className="result-item" key={"result-item-" + id++}>
                    <td className="result">
                        <a href={file.url} target="_blank" rel="noopener noreferrer">{file.requestedUrl}</a>
                    </td>
                    <td className="result">
                        {file.categories.performance ? Math.ceil(file.categories.performance) : 'n/a'}
                    </td>
                    <td className="result">
                        {file.categories.accessibility ? Math.ceil(file.categories.accessibility) : 'n/a'}
                    </td>
                    <td className="result">
                        {file.categories['best-practices'] ? Math.ceil(file.categories['best-practices']) : 'n/a'}
                    </td>
                    <td className="result">
                        {file.categories.seo ? Math.ceil(file.categories.seo) : 'n/a'}
                    </td>
                    <td className="result">
                        {file.categories.pwa ? Math.ceil(file.categories.pwa) : 'n/a'}
                    </td>
                </tr>)
            }
            return null;
        });
        this.setState({
            rendered: listItems
        })
        this.props.setNoOfResults(id - 1);
    }
    render() {
        return (
            <tbody>{this.props.data ? this.state.rendered : <tr><td colSpan="3">No results returned.</td></tr>}</tbody>
        );
    }
}

export default FileResults;