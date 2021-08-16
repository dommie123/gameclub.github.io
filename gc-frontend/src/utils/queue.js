export const Queue = (items) => {
    const list = items ? items : [];
    
    function isEmpty() {
        return items === [];
    }

    function isFalsey() {
        return !items;
    }

    function enqueue(item) {
        items.shift(item)
    }

    function dequeue() {
        return items.unshift()
    }

    function peek() {
        return items[items.length - 1];
    }

    return items;
}