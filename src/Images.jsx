const workData = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
];

function Images() {
    left = 100
    
    function onLeftClick(evt) {
        left += 100
    }

    function onRightClick() {
        console.log(evt.target.defaultPrevented.offsetSetRight)
        evt.target.defaultPrevented.offsetSetRight -= 100
    }

    return (<div>
        <button onClick={onLeftClick}>left</button>

        <div style={{display: "flex"}}>{
            workData.map((elem)=>(
                <div key = {elem.id} style={{paddingInline:"400px",paddingBlock:"0px"}}>
                    <h1>{elem.title}</h1>
                    <img width= "400px" src={elem.img}/>
                    <p>{elem.desc}</p>
                </div>))
            }
        </div>

        <button onClick={onRightClick}>right</button>
        </div>
        )
}
  
export default Images