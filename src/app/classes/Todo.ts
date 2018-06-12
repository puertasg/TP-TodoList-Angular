class Todo {
    private _title: string;
    private _isDone: boolean;
    private _id: number;

    constructor(title: string, isDone: boolean, id?: number) {
        this._title = title;
        this._isDone = isDone;
        if (id) {
            this._id = id;
        }
    }

    /**
     * Getter title
     * @return {string}
     */
    public get title(): string {
        return this._title;
    }

    /**
     * Getter isDone
     * @return {boolean}
     */
    public get isDone(): boolean {
        return this._isDone;
    }

    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Setter title
     * @param {string} value
     */
    public set title(value: string) {
        this._title = value;
    }

    /**
     * Setter isDone
     * @param {boolean} value
     */
    public set isDone(value: boolean) {
        this._isDone = value;
    }

    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
        this._id = value;
    }

}

export { Todo }