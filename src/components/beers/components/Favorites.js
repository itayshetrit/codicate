import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DropDown from '../../common/dropDown/DropDown'
import ContactUs from '../../common/contactUs/ContactUs';
import DeleteModal from '../../common/modals/DeleteModal';

import InfoModal from './InfoModal';

import { MainDiv, FlexStart, BeerName, BeerCard, DisplayBeers, Pictures } from '../beersStyle';

import { updateFavorites } from '../../../store/actions/beers/favorites-actions';

import goldStar from '../../../assets/beers/goldStar.svg';
import noPicture from '../../../assets/beers/noPicture.jpg';

const Favorites = () => {

    const dispatch = useDispatch();
    const { favorites } = useSelector(state => state.favoritesReducer)
    const [selectedCard, setSelectedCard] = useState(null);
    const [beerToDelete, setBeerToDelete] = useState(null);
    const updateFavorites1 = () => {
        let newFavorites = favorites.filter(item => item.id !== beerToDelete);
        dispatch(updateFavorites(newFavorites))
    }

    const setRank = (id, rank) => {
        let newFavorites = [...favorites];
        for (let item of newFavorites) {
            if (item.id === id) {
                item.rank = rank;
                break; //Stop this loop, was found
            }
        }
        dispatch(updateFavorites(newFavorites))
    }

    let list = "beers not found...";
    if (favorites.length) {
        list = favorites.map((item, index) => {
            return (
                <BeerCard key={index} className="animated fadeIn" onClick={() => setSelectedCard(item)}>
                    <Pictures>
                        <div>
                            <div style={{ color: "white", cursor:"auto" }} onClick={(e) => e.stopPropagation()}>Rank</div>
                            <DropDown rank={item.rank} setRank={setRank} id={item.id} />
                        </div>
                        <div>
                            <img src={item.image_url ? item.image_url : noPicture} alt="noPicture" />
                        </div>
                        <div>
                            <img
                                src={goldStar} alt="goldStar"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setBeerToDelete(item.id);
                                }}
                            />
                        </div>
                    </Pictures>
                    <BeerName>{item.name}</BeerName>
                </BeerCard>
            )
        })
    }

    return (
        <MainDiv>
            <FlexStart style={{ margin: "25px" }}>
                <div>Favorites Beers</div>
            </FlexStart>
            <ContactUs />
            <DisplayBeers>{list}</DisplayBeers>
            {selectedCard && <InfoModal onClose={setSelectedCard} data={selectedCard} />}
            {beerToDelete && <DeleteModal func={updateFavorites1} id={beerToDelete} setBeerToDelete={setBeerToDelete} />}
        </MainDiv>
    )
}

export default Favorites;