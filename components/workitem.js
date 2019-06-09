import Preview from './preview'

const WorkItem = ({ item }) => (
  <section className={'work-item'} style={item.theme}>
  <header>
    <h1 className={'title'}>{item.title}</h1>
    <p className="short">{item.short}</p>  
  </header>
  <Preview screens={item.previews}/>
  <div className="information">
    <div className="specs">
      <p><span className="label">Role</span>{item.role}</p>
      <p><span className="label">Status</span>{item.status}</p>
      <br/>
      <p className="date">{item.date}</p>
    </div>
    <div className="details">
      <p>{item.details}</p>
      <div className="tech">
        <p className="label">Technology Stack</p>
        <div className="items">
        {
          item.technologies.map(tech => (
            <div className="item">
              <img src={'/static/img/logos/'+tech.replace(' ', '').toLowerCase() + '.png'}/>
            </div>
          ))
        }
        </div>  
      </div>
    </div>
  </div>
  </section>
  )

export default WorkItem