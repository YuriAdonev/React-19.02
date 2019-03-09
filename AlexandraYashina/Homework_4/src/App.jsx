import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import Blog from './components/Blog';
import WelcomeModal from './components/WelcomeModal';


class App extends React.Component {
    render() {
        const postItems = [
            { title: "Потепление до плюс 6 градусов", postBody: "«На этой неделе москвичей по-прежнему ждет неустойчивый характер погоды, с частыми перепадами температуры и давления, хотя в целом, наступившая неделя окажется выше средних многолетних значений почти на четыре градуса. В начале недели мы попадем под влияние очередного атлантического циклона уже завтра в его теплом секторе в Москве температура повысится до плюс 3−4 градусов, в столичном регионе плюс 1−6, нас ожидает осадки в виде мокрого снега, переходящего в дождь и очень низкое атмосферное давление», — сказала собеседница агентства.<br>По ее словам, в среду в регион ненадолго вернутся морозы." },
            { title: "Парковка на улицах Москвы будет бесплатной 8 и 9 марта", postBody: "Парковочные места в Москве будут бесплатными 8 и 9 марта, сообщил в понедельник ТАСС заместитель мэра Москвы Максим Ликсутов.<br>«В пятницу и субботу, 8 и 9 марта, парковка в Москве будет бесплатной, в том числе на улицах, где действует тариф 380 рублей в час», — сказал он.<br>В воскресенье, 10 марта, парковка в столице будет традиционно бесплатной, исключение составят стоянки на 237 улицах в центре города. На них 15 декабря 2018 года начал действовать повышенный тариф 380 рублей в час, а парковка стала платной по воскресеньям." },
            { title: "Самых пожилых блогеров выберут в Подмосковье", postBody: "В Московской области запускают новый проект «Долголетие в Подмосковье», в рамках него в ближайшее время выберут самых активных пожилых блогеров региона, говорится в сообщении пресс-службы министерства социального развития Московской области.<br>Чтобы стать участником этого конкурса необходимо прислать ссылку на блог любой социальной сети министерства или на msrmo@ya.ru.<br>Участие в конкурсе могут принять граждане старше 55 лет, которые ведут свой блог в любой социальной сети." }
        ];
        return <>
            <Blog blogTitle="Новости Москвы" items={postItems} />
            <WelcomeModal />
        </>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));