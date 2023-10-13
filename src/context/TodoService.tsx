import { TodoCreateRequest, TodoUpdateRequest } from "@/types/todos"
import React from "react"

interface TodoService {
    list: () => Promise<any>
    create: (todo: TodoCreateRequest) => Promise<any>
    delete: (id: string) => Promise<any>
    update: ({id, todo}: {id: string; todo: TodoUpdateRequest}) => Promise<any>
    deleteMany: () => Promise<any>
    deleteComplete: () => Promise<any>
}

export class BackendTodoService implements TodoService {
    private userId: string;

    constructor(userId: string) {
        this.userId = userId
    }
    public async list () {

    }
    public async create (todo: TodoCreateRequest) {

    }
    public async delete (id: string) {

    }
    public async update ({id, todo}: {id: string; todo: TodoUpdateRequest}) {

    }
    public async deleteMany () {

    }
    public async deleteComplete () {

    }
}


/**
 * list: [1,2,3,4,5,6]
 * todo-1: {}
 * todo-2: {}
 */


export class LocalStorageTodoService implements TodoService {
    public async list () {
        const maybeString = window.localStorage.getItem(`todos`) 

        return maybeString ? JSON.parse(maybeString) : null

    }
    public async create (todo: TodoCreateRequest) {
        const id = Math.ceil(Math.random() * 10_000)

        const createdTodo = {
            id,
            todo
        }

        window.localStorage.setItem(`todo-${id}`, JSON.stringify(createdTodo))

        let newList = await this.list()

        if (!newList) {
            newList = []
        }

        newList.push(id)


    }
    public async delete (id: string) {

    }
    public async update ({id, todo}: {id: string; todo: TodoUpdateRequest}) {

    }
    public async deleteMany () {

    }
    public async deleteComplete () {

    }
}

export const ServiceContext = React.createContext<TodoService>(new BackendTodoService())