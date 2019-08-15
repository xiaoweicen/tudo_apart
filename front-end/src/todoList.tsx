import React from 'react';
import Item from './item';
import axios from 'axios';
import Dialog from './dialog'
import ListItem from './listItem';

class TodoList extends React.Component {
    public state: { list: Item[], finishcount: number };


    constructor(props: { list: Item[]; }) {
        super(props);

        this.state = {
            list: [], finishcount: 0
        };
        this.update();
    }
    public request(sss:string) {
        const url = 'http://localhost:3000/' + sss;
        console.log(url);
        axios.get(url)
            .then(response => {
                const result = response.data;
                //const {name,html_url} = result.items[0];
                console.log(result);
                this.setState(result);
            });

        

    }

    public addTask(name:string): void {
        this.request("add?name="+name);
    }

    update() {
        this.request("refresh");
    }

    finish(id: number){
        this.request("finish?id="+id);
    }

    
    delete(id: number) {
        this.request("delete?id="+id);
    }

    render() {
        return (
            <div className="container">
                <h1>ToDo</h1>
                <Dialog addNewTask={this.addTask.bind(this)} nums={this.state.list.length} />
                <ul>
                    {this.state.list.map((item, index) =>
                        <ListItem
                            item={item}
                            finish={this.finish.bind(this)}
                            delete={this.delete.bind(this)}
                            key={index}
                        />
                    )}
                    <li>{this.state.finishcount} / {this.state.list.length}完成</li>
                </ul>
            </div>
        );
    }
}

export default TodoList;