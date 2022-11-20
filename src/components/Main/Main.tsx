import React, { FC } from "react";
import Flex from "../Flex/Flex";
import Section from "../Section/Section";
import TasksCount from "../TasksCount/TasksCount";
import "./Main.css";
import ListTask from "../ListTasks/ListTasks";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { ReactComponent as Clock } from "../../assets/clock.svg";

const mockList = [
  { id: 1, value: "Устранить засор в раковине", isCompleted: false },
  { id: 2, value: "Стирка белого белья", isCompleted: false },
  { id: 3, value: "Убраться", isCompleted: false },
  { id: 4, value: "Убраться дома", isCompleted: false },
];

const Main: FC = () => {
  return (
    <main>
      <Flex direction="column" padding="0 15px">
        <Section>
          <Flex direction="row" justify="space-between" align="center">
            <h2>Успехи за неделю</h2>
            <div className="btn_more">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Flex>
          <Flex direction="row" justify="space-between" align="center">
            <TasksCount title="Создано" count={mockList.length + 1} />
            <TasksCount title="Завершено" count={mockList.length + 1} />
            <TasksCount title="Удалено" count={mockList.length + 1} />
          </Flex>
        </Section>
        <Section>
          <Flex direction="row" justify="space-between" align="center">
            <h2>Успехи за неделю</h2>
            <div className="btn_more">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Flex>
          <ul>
            <ListTask mockList={mockList} />
          </ul>
          <h2>Завершенные задачи</h2>
          <ul className="done_task">
            <li>Полить цветы</li>
            <li>Вызвать сантехника</li>
          </ul>
        </Section>
      </Flex>
      <Flex direction="column">
        <Section>
          <h2>Такс такс такс</h2>
          <Flex direction="row" justify="space-between">
            <div>
              <p>На часах у нас</p>
              <Clock className="time_svg" />
              <span className="title_time">12:33:40</span>
            </div>
            <div>
              <p>А сегодня у нас</p>
              <Calendar className="time_svg" />
              <span className="title_time">5 марта 2023</span>
            </div>
          </Flex>
        </Section>
        <Section>
          <h2>Наблюдение</h2>
          <p>
            Больше всего задач вы <a href="#">создаете</a> в Понедельник
          </p>
          <p>
            Больше всего задач вы <a href="#">завершаете</a> во Вторник
          </p>
        </Section>
        <Section>
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
