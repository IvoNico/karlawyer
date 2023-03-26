
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import ArticleDetailsContainer from '../ArticleDetailsContainer/ArticleDetailsContainer'
import ItemsListContainer from '../ContainerListArticles/ContainerListArticles'
import NavBar from '../NavBar/NavBar'
import AboutMe from '../Pages/AboutMe/AboutMe'
import Footer from '../Pages/Footer/Footer'
import SectionList from '../SectionList/SectionList'
import './AppRouting.css'

export default function AppRouting (){
    return (
    <BrowserRouter>
    <header>
        <NavBar/>
    </header>
    <SectionList/>
    <Routes>
        
        <Route path='/' element={<ItemsListContainer/>}/>
        <Route path="/article/:id" element={<ArticleDetailsContainer/>} />
        <Route path="/aboutMe" element={<AboutMe/>} />
        
    </Routes>
    <footer>
        <Footer/>
    </footer>
    </BrowserRouter>)
}