import styles from './search_header.module.css';
import React, { memo, useRef } from 'react';

const SearchHaeder = memo(
    ({ onSearch }) => {
        const inputRef = useRef();
    
        // 공통 클릭 데이터
        const handleSearch = () => {
            const value = inputRef.current.value;
            onSearch(value);
            //console.log(value);
        };
    
        const onClick = () => {
            handleSearch();
        };
        const onKeyPress = (event) => {
            if(event.key === 'Enter'){
                handleSearch();
            }
        };
        console.log('Header!!!');
        return (
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img className={styles.img} src="/img/logo.png" alt="logo"/>
                    <h1 className={styles.title}>Youtube</h1>
                </div>
                <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress}/>
                <button className={styles.button} type="submit" onClick={onClick}>
                    <img className={styles.buttonImg} src="/img/search.png" alt="search"/>
                </button>
            </header>
        );
    }
);

export default SearchHaeder;