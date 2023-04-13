import { FC } from "react";
import { Link } from "react-router-dom";
import { h_text, header_card, header_card_desc, header_card_title, header_cards, header_flex, header_text } from "./styles";
import { logo } from "../../images/img";
import s from './header.module.css'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const cards = [
    {title:'Услуги', desc:'Аренда корта'},
    {title:'Услуги', desc:'Детский теннис'},
    {title:'Услуги', desc:'Сборы команд'},
    {title:'Услуги', desc:'Расписание'},
  ]
  const links = [
    {name:'Главная', way:'/'},
    {name:'О клубе', way:'/about'},
    {name:'Турниры', way:'/news'},
    {name:'Услуги', way:'/'},
    {name:'Детский теннис', way:'/'},
    {name:'Галерея', way:'/'},
    {name:'Цены', way:'/'},
    {name:'Контакты', way:'/'},
]
  return (
    <header className={`${s.bg_image}`}>
      <nav className={`${header_flex} ${header_text} container mx-auto py-11`}>
        <Link to={"/"}><img src={logo} alt="" /></Link>
        <div className="flex gap-x-10">
          {links.map(x =>
            <Link key={x.way} to={x.way}>{x.name}</Link>
            )}
        </div>
        <div className="flex items-center gap-x-7">
            <Link to={"/news"}>
            <svg className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
            </Link>   
            <Link to={"/news"}>
            <svg className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z"/></svg>
            </Link>   
        </div>
      </nav>
      <div className="border-white border-t "></div>
      <div className="pt-72 pb-64 container mx-auto">
        <h1 className={`${h_text} `}>Петербургский теннисный клуб имени М.А. Пасечникова</h1>
      </div>
      <div className={`${header_cards}`}>
        {cards.map(card =>
          <div key={card.desc} className={header_card}>
          <p className={header_card_title}>{card.title}</p>
          <div className="flex items-center mt-4">
          <p className={header_card_desc}>{card.desc}</p>
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.2515 20H2.50146C1.83842 20 1.20254 19.7366 0.733698 19.2678C0.264857 18.7989 0.00146484 18.163 0.00146484 17.5V3.75C0.00146484 3.08696 0.264857 2.45107 0.733698 1.98223C1.20254 1.51339 1.83842 1.25 2.50146 1.25H7.50147V3.75H2.50146V17.5H16.2515V12.5H18.7515V17.5C18.7515 18.163 18.4881 18.7989 18.0192 19.2678C17.5504 19.7366 16.9145 20 16.2515 20ZM9.62646 12.1337L7.86397 10.3663L15.7302 2.5H11.2515V0H20.0015V8.75H17.5015V4.26875L9.62646 12.1337Z" fill="white"/>
          </svg>
          </div>
        </div>)}
      </div>
    </header>
  );
};
