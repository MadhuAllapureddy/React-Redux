import React from 'react';
import {connect} from 'react-redux'
import TodoList from '../components/TodoList'


const getVisibleTodos = (todos) => {
    console.log(todos)
    return todos;
 
};


const mapStateToProps = state => ({
   todos: getVisibleTodos(state.todos)
})

export default connect(mapStateToProps,null)(TodoList);