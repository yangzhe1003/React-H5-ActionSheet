import React, { Component } from "react";
import "./App.css";
import ActionSheet from "./ActionSheet/index.jsx"

class App extends Component {
	constructor(){
		super()
		this.state = {
			visite: false
		}
	}
    render() {
        return (
            <div className="App">
                <h2 onClick={()=>{this.setState({visite: true})}}>点我弹窗</h2>

				<ActionSheet
                    visite={this.state.visite}
                    onClose={() => {
                        this.setState({ visite: false });
                    }}
                    title="标题"
                >
					<p>自定义内容</p>
					<p>自定义内容</p>
					<p>自定义内容</p>
					<p>自定义内容</p>
					<p>自定义内容</p>
					<p>自定义内容</p>
					<p>自定义内容</p>
					<p>自定义内容</p>
					<p>自定义内容</p>
					<p>自定义内容</p>
                </ActionSheet>
            </div>
        );
    }
}

export default App;
