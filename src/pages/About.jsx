import React from 'react'
import useShop from '../shopContext'

function About() {
  const {ThemeChanger,apptheme} = useShop()
  return (
    <div className={`${apptheme === "dark" ?" bg-slate-700 text-white" : "bg-white text-black" }`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam laborum cumque aspernatur delectus voluptatum aut vitae dolorum, in sit accusamus, repellat impedit iusto nihil obcaecati cum quisquam cupiditate. Veritatis ipsam delectus enim amet animi molestiae rem sapiente voluptatibus magni accusantium nostrum ea, officia vitae, dolores saepe nesciunt deserunt velit. Earum.</div>
  )
}

export default About