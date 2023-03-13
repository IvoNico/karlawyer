
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import ArticleDetailsContainer from '../ArticleDetailsContainer/ArticleDetailsContainer'
import ItemsListContainer from '../ContainerListArticles/ContainerListArticles'
import NavBar from '../NavBar/NavBar'



export default function AppRouting (){
    return (
    <BrowserRouter>
    <header>
        <NavBar/>
    </header>
    <Routes>
        <Route path='/' element={<ItemsListContainer/>}/>
        <Route path="/article/:id" element={<ArticleDetailsContainer/>} />
    </Routes>
    </BrowserRouter>)
}