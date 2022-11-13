import React, { FC } from "react";
import Flex from "../Flex/Flex";
import Section from "../Section/Section";
import TasksCount from "../TasksCount/TasksCount";
import "./Main.css";
import ListTask from "../ListTasks/ListTasks";
import calendar from "../../assets/calendar.svg";
import clock from "../../assets/clock.svg";

const mockList = [
  { id: 1, value: "Устранить засор в раковине" },
  { id: 2, value: "Стирка белого белья" },
  { id: 3, value: "Убраться" },
  { id: 4, value: "Убраться дома" },
];
interface IMain {
  toggle: boolean;
}
const Main: FC<IMain> = ({ toggle }) => {
  return (
    <main style={toggle ? { background: "#21262f" } : { background: "white" }}>
      <Flex direction="column" padding="0 15px" toggle={toggle}>
        <Section toggle={toggle}>
          <Flex
            direction="row"
            justify="space-between"
            align="center"
            toggle={toggle}
            background="#2C3440"
          >
            <h2>Успехи за неделю</h2>
            <div className="btn_more">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Flex>
          <Flex
            direction="row"
            justify="space-between"
            align="center"
            toggle={toggle}
            background="#2C3440"
          >
            <TasksCount
              title="Создано"
              count={mockList.length + 1}
              toggle={toggle}
            />
            <TasksCount
              title="Завершено"
              count={mockList.length + 1}
              toggle={toggle}
            />
            <TasksCount
              title="Удалено"
              count={mockList.length + 1}
              toggle={toggle}
            />
          </Flex>
        </Section>
        <Section toggle={toggle}>
          <Flex
            direction="row"
            justify="space-between"
            align="center"
            toggle={toggle}
            background="#2C3440"
          >
            <h2>Успехи за неделю</h2>
            <div className="btn_more">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Flex>
          <ul>
            <ListTask mockList={mockList} toggle={toggle} />
          </ul>
          <h2>Завершенные задачи</h2>
          <ul className="done_task">
            <li>Полить цветы</li>
            <li>Вызвать сантехника</li>
          </ul>
        </Section>
      </Flex>
      <Flex direction="column" toggle={toggle}>
        <Section toggle={toggle}>
          <h2>Такс такс такс</h2>
          <Flex
            direction="row"
            justify="space-between"
            toggle={toggle}
            background="#2C3440"
          >
            <div>
              <p>На часах у нас</p>
              <img src={clock} alt="clock" />
              <span className="title_time">12:33:40</span>
            </div>
            <div>
              <p>А сегодня у нас</p>
              <img src={calendar} alt="calendar" />
              <span className="title_time">5 марта 2023</span>
            </div>
          </Flex>
        </Section>
        <Section toggle={toggle}>
          <h2>Наблюдение</h2>
          <p>
            Больше всего задач вы <a href="#">создаете</a> в Понедельник
          </p>
          <p>
            Больше всего задач вы <a href="#">завершаете</a> во Вторник
          </p>
        </Section>
        <Section toggle={toggle}>
          <h2>Факт дня</h2>
          <p>
            Человек, который просыпается в 6 утра, по статистике, закрывает все
            задачи к 18:00 вечера. Попробуем также 🤔?
          </p>
        </Section>
      </Flex>
    </main>
  );
};
export default Main;
