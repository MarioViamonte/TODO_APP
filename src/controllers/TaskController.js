const { response } = require('express')
const database = require('../database/connection')

class TaskController{
    novaTarefa(request,response){
        
        const {tarefa, descricao, responsavel} = request.body

        console.log(tarefa, descricao, responsavel)

        database.insert({tarefa, descricao, responsavel}).table("tasks").then(data=>{
            console.log(data)
            response.json({message:"tarefa criada com sucesso"})
        }).catch(error=>{
            console.log(error)
        })
    }

    listarTarefas(request, response){
        database.select("*").table("tasks").then(tarefas=>{
            console.log(tarefas)
            response.json(tarefas)
        }).catch(error=>{
            console.log(error)
        })
    }

    listarIndividual(request, response){
        
        const id = request.params

        database.select("*").table("tasks").where({id:id}).then(tarefa=>{
            console.log(tarefa)
            response.json(tarefa)
        }).catch(error=>{
            console.log(error)
        })
    }
}

module.exports = new TaskController()