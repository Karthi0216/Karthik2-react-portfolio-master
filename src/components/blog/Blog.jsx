import React from 'react';
import './Blog.css';

import Image1 from '../../assets/blog-1.svg';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Posts</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        {/* Changed <a> to <button> */}
                        <button className="blog__category">Example</button>
                        <button className="blog__img-btn">
                            <img src={Image1} alt="Blog Thumbnail" className="blog__img" />
                        </button>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Example Blog</h3>
                        <div className="blog__meta">
                            <span>09 February, 2022</span>
                            <span className="blog__dot">.</span>
                            <span>Greg</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
