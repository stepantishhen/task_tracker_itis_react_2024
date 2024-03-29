import React from 'react';
import DefaultTemplate from "../components/template/DefaultTemplate";


const HomePage = () => {
    return (
        <div>
            <DefaultTemplate />
            <h1 className="text-center">Это главная страница</h1>
        </div>
    );
};

export default HomePage;