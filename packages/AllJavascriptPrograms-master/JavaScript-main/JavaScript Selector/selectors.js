 /*
        Javascript Selectors :-
            - getElementsByTagName()
            - getElementsByClassName()
            - getElementById()
            - querySelector()
            - querySelectorAll()
        */

        // 1] getElementsByTagName() :- It returns collectiuon of html. It means it returns an array

        document.getElementsByTagName('div')[0].style.border = "1px solid black";
        document.getElementsByTagName('div')[1].style.border = "1px solid black";
        document.getElementsByTagName('section')[0].style.backgroundColor = "skyblue";
        document.getElementsByTagName('section')[1].style.backgroundColor = "skyblue";

        // Apply css properties using "classList"
        document.getElementsByTagName('section')[0].classList = "selectorSec";
        document.getElementsByTagName('section')[1].classList = "selectorSec";

        // Using loops
        const divList = document.getElementsByTagName('div');
        for (let i = 0; i < divList.length; i++) {
            divList[i].classList = "selectorDiv   ";
        }


        // 2] getElementsByClassName() :- It also retuns an array
        document.getElementsByClassName('className')[0].style.backgroundColor = "yellow";
        document.getElementsByClassName('className')[1].style.backgroundColor = "yellow";

        // using loop
        let cList = document.getElementsByClassName('className');
        for (let i = 0; i < cList.length; i++) {
            cList[i].style.backgroundColor = "pink";
        }


        // 3] getElementById() :- It will not return an array, as ID is always unique it select only that specific content
        document.getElementById('idName1').style.backgroundColor = "blue";
        document.getElementById('idName2').style.backgroundColor = "red";

        // 4] querySelector() :- it will fetch only the first occurence, whether it is class or tagName.
        document.querySelector('.className').style.backgroundColor = "red";

        // 5] querySelectorAll() :- it will fetch the data according to array.
        document.querySelectorAll('div')[0].style.backgroundColor = "yellow";
        document.querySelectorAll('div')[1].style.backgroundColor = "yellow";
        document.querySelectorAll('div')[2].style.backgroundColor = "yellow";
        document.querySelectorAll('.className')[0].style.backgroundColor = "yellow";
        document.querySelectorAll('.className')[1].style.backgroundColor = "yellow";

        // using loops
        const selAll = document.querySelectorAll('div');
        for (let i = 0; i < selAll.length; i++) {
            selAll[i].style.backgroundColor = "green";
        }
