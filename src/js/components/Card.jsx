import React from 'react';

const Card = () => {
  return (
         <div class="card">
            <img src="https://neliosoftware.com/es/wp-content/uploads/sites/3/2018/07/aziz-acharki-549137-unsplash-1200x775.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div class="d-flex justify-content-center align-items-center">
                <a href="#" class="btn btn-primary justify-content-center gap">Find out more!</a>
              </div>
            </div>
          </div>
  )
}

export default Card;
