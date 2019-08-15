import Item from "./item";
import { listenerCount } from "cluster";

class ListItem {
    list: Item[] = [new Item("写代码"), new Item("读书"), new Item("打篮球")];
    finishcount: number = 0;

    handleAdd(newName: string) {
        let newitem: Item = new Item(newName);
        this.list.push(newitem);
        return this.handlerefresh();
    }

    handleDelete(id: number) {
        this.list.splice(id,1);
        return this.handlerefresh();

    }

    handleFinished(id: number) {
        this.list[id].finish();
        return this.handlerefresh();
    }

    handlerefresh() {
        let count = 0;
        this.list.forEach((item, index) => {
            this.list[index].id = index;
            if (item.complete) {
                count++;
            }
        });
        this.finishcount = count;
        return this;
    }


}

export default ListItem;