import React from 'react';
import Item from './item';
class ListItem extends React.Component<{ item: Item, finish: any, delete: any, key: number }>{
    constructor(props: Readonly<{ item: Item; finish: any; delete: any; key: number; }>) {
        super(props);
        this.handleFinished = this.handleFinished.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }
    handleDelete() {
        this.props.delete(this.props.item.id); //执行父组件传来的方法
    }

    handleFinished() {
        
        this.props.finish(this.props.item.id); //执行父组件传来的方法
    }

    render() {
        const item = this.props.item;
        let itemStyle:string = item.complete ? "finish" : "unfinish";
        return (
            <li key={item.id} className={itemStyle}>
                <span
                    onClick={this.handleFinished}
                    id={item.id.toString()}
                    className="check-btn"
                    style={{ backgroundColor: item.complete ? 'rgb(61, 91, 98)' : '#fff' }}
                ></span>
                <span>{item.name}</span>
                <span onClick={this.handleDelete} className="delete-btn">删除</span>
                <span className="time">{item.time}</span>
            </li>
        );
    }

}

export default ListItem;