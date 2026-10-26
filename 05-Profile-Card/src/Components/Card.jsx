
const Card = (props) => {
  return (
    <div class="card">
    <div class="avatar"></div>
    <h2>{props.name}</h2>
    <p class="tagline">Designer who creates delightful experiences.</p>

    <div class="stats">
      <div class="stat">
        <h3>{props.project}</h3>
        <span>Projects</span>
      </div>
      <div class="stat">
        <h3>{props.like}</h3>
        <span>Likes</span>
      </div>
      <div class="stat">
        <h3>{props.comment}</h3>
        <span>Comments</span>
      </div>
    </div>

    <div class="social">
      <button>LinkedIn</button>
      <button>Behance</button>
    </div>

    <button class="contact-btn">
      ✈ Contact me
    </button>
  </div>
  )
}

export default Card
