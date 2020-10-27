import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

import { MySlider } from '../../common/slider/RangeSliderStyle';
import Pagination from '../../pagination/Pagination';
import InfoModal from './InfoModal';
import ContactUs from '../../common/contactUs/ContactUs';

import {
    MainDiv, FlexStart, Input, PositionRelative, PlaceHolderImage, BeerCard,
    DisplayBeers, BeerName, Pictures, SearchButton, FoodFilterError
} from '../beersStyle';

import { getBeers, cleanBeers } from '../../../store/actions/beers/beers-actions';
import { updateFavorites } from '../../../store/actions/beers/favorites-actions';

import searchIcon from '../../../assets/beers/search.svg';
import whiteStar from '../../../assets/beers/whiteStar.svg';
import goldStar from '../../../assets/beers/goldStar.svg';
import noPicture from '../../../assets/beers/noPicture.jpg';

const beersPerPage = 8;
let rules = {
    food: (/^[ A-Za-z]{0,20}$/)
};
const Browse = () => {

    const { addToast } = useToasts();
    const dispatch = useDispatch();
    const { error, beers, total } = useSelector(state => state.beersReducer)
    const { favorites } = useSelector(state => state.favoritesReducer)
    const [foodFilter, setFoodFilter] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);
    const [page, setPage] = useState(1);
    const [foodFilterError, setFoodFilterError] = useState(null);
    const [lt, setLt] = useState(18.4);
    const [gt, setGt] = useState(0);
    const searchBeers = (page1) => {
        if (foodFilterError === null) {
            dispatch(getBeers(foodFilter, { gt: gt, lt: lt }, page1 || page));
        }
    }

    useEffect(() => {
        searchBeers();
        return () => {
            dispatch(cleanBeers());
        }
    }, [page])

    useEffect(() => {
        if (error) {
            addToast(error, { appearance: "error", autoDismiss: true })
        }
    }, [error])


    const updateFavorites1 = (data) => {
        let newFavorites = [];
        let isExist = favorites.filter(item => item.id === data.id);
        if (isExist[0]) {
            newFavorites = favorites.filter(item => item.id !== data.id);
        }
        else {
            newFavorites = [...favorites, { ...data, rank: 1 }]
        }
        dispatch(updateFavorites(newFavorites))
    }

    let list = "beers were not found...";
    if (beers.length) {
        list = beers.map((item, index) => {

            return (
                <BeerCard key={index} className="animated fadeIn" onClick={() => setSelectedCard(item)}>
                    <Pictures>
                        <div style={{ color: "white" }}>{item.abv}%</div>
                        <div><img alt="noPicture"
                            src={item.image_url ? item.image_url : noPicture} /></div>
                        <div>
                            <img
                                src={favorites.find(el => el.id === item.id) ? goldStar : whiteStar}
                                alt="whiteStar"
                                onClick={(e) => {
                                    updateFavorites1(item);
                                    e.stopPropagation();
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
            <FlexStart style={{ margin: "25px", width: "100%" }}>
                <FlexStart>
                    <div>Food Pairing</div>
                    <PositionRelative style={{ marginLeft: "15px" }}>
                        <div><PlaceHolderImage src={searchIcon} alt="searchIcon" onClick={() => {
                            setPage(1);
                            searchBeers(1);
                        }} /></div>
                        <Input onChange={(e) => {
                            if ((rules.food).test(e.target.value)) {
                                setFoodFilter(e.target.value);
                                setFoodFilterError(null);
                            }
                            else {
                                setFoodFilterError("0-20 English letters and space only");
                            }
                        }} />
                    </PositionRelative>
                    <FoodFilterError>{foodFilterError}</FoodFilterError>
                </FlexStart>
                <FlexStart>
                    <div style={{ marginRight: "15px" }}>Alcohol Percentage</div>
                    <div>
                        <MySlider
                            max={18.4}
                            step={0.1}
                            minDistance={2}
                            defaultValue={[gt, lt]}
                            thumbText={"%"}
                            onChange={(value) => {
                                setGt(value[0]);
                                setLt(value[1]);
                            }}
                        />
                    </div>
                    <SearchButton onClick={() => {
                        setPage(1);
                        searchBeers(1);
                    }}>Search</SearchButton>
                </FlexStart>
            </FlexStart>
            <ContactUs />
            <DisplayBeers>{list}</DisplayBeers>
            { total / beersPerPage > 1 &&
                <Pagination
                    changePage={searchBeers}
                    setPage={setPage}
                    page={page} total={total}
                    perPage={beersPerPage}
                    eachSide={3}
                    pages={total % beersPerPage === 0 ? total / beersPerPage : parseInt(total / beersPerPage) + 1}
                />}
            {selectedCard && <InfoModal onClose={setSelectedCard} data={selectedCard} />}
        </MainDiv>
    )
}

export default Browse;

