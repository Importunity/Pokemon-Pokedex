import { Card, Input, Pagination, Switch, Typography } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { loadCards, loadSearchCards } from '../api/PokemonApi';
import PokemonPage from './PokemonPage';
import {ThemeProvider} from 'styled-components';
import { darkTheme, lightTheme } from './Theme';
import { GlobalStyles } from './GlobalTheme';

function Home(props){
    const[searchValue, setSearchValue] = useState(props.initialCards);
    const[currentView, setCurrentView] = useState(null);
    const[values, setValues] = useState({minValue: 0, maxValue: 10});
    const[theme, setTheme] = useState('light');
    useEffect(() => {
        loadCards().then(data => setSearchValue(data.cards));
    }, [])


    const handlePagination = (value) => {
        if(value <= 1){
            setValues({ minValue: 0, maxValue: 10 })
        }else{
            setValues({minValue: values.maxValue, maxValue: value * 10})
        }
    }

    const currentViewClick = (index) => {
        setCurrentView(searchValue[index]);
    }

    const onSearch = (value) => {
        loadSearchCards(value).then(data => setSearchValue(data.cards));
    }

    const handleCurrentView = (value) => {
        setCurrentView(value)
    }

    const themeChange = () => {
        if(theme === 'light'){
            setTheme('dark');
        }else{
            setTheme('light');
        }
    }


    return(
        <ThemeProvider theme={theme === 'light'? lightTheme : darkTheme}>
        <>
        <GlobalStyles />
        <div>
            <Switch onChange={themeChange} id="switch" checkedChildren="light" unCheckedChildren="dark" defaultChecked ></Switch>
            {currentView == null?
            <Fragment>
            <div className="container">
                <div className="search">
                    <Typography.Title>
                    Pokedex
                    </Typography.Title>
                    <Input.Search onSearch={onSearch} type="search" allowClear name="search" placeholder="example: charizard" />
                </div>
            </div>
            <div className="container-fluid mt-4 mb-4 poke-container">
                {searchValue !== undefined? 
                    searchValue.slice(values.minValue, values.maxValue).map((card, index) => {
                        return(
                            <div key={index} onClick={() => currentViewClick(index)} className="mb-2">
                                <Card  hoverable cover={<img alt={card.name} src={card.imageUrlHiRes}/>}>
                                </Card>
                            </div>
                        )
                    })
                : null}
            </div> 
            </Fragment>
            : <PokemonPage handleCurrentView={handleCurrentView} currentView={currentView}/>}
            {currentView === null? 
                <Pagination className="mt-3" style={{textAlign: "center", marginBottom: "2vh"}} simple defaultCurrent={1} defaultPageSize={10} onChange={handlePagination} total={searchValue === undefined? 1 : searchValue.length}/>
                :
                null}
        </div>
        </>
        </ThemeProvider>
    )
}

export default Home;