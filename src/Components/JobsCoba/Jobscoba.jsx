import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JobsCoba = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getContent();
  });

  const getContent = async () => {
    const response = await axios.get("http://localhost:5001/contents");
    setContents(response.data);
  };

  const deleteContent = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/contents/${id}`);
      getContent();
    } catch (error) {
      console.log(error);
    }
  };

  return contents.map((content, i) => {
    return (
      <div className="flex  gap-10 justify-center flex-wrap items-center ">
        <div className="flex  gap-10 justify-center flex-wrap items-center bg-slate-500">
          <div className="flex-row  flex-wrap justify-center flex">
            <div key={contents.id} class="card mx-6  mt-6 bg-white p-[20px] m-[20px] gap-[1rem]  ">
              <div class="card-image"></div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left"></div>
                  <div class="media-content">
                    <p class="title is-4">{content.nickname}</p>
                    <p class="subtitle is-6">{content.username}</p>
                  </div>
                </div>
                <div class="content">{content.testpost}</div>
              </div>
              <footer class="card-footer">
                <Link to={`editContent/${content.id}`}>
                  <a class="card-footer-item">Edit</a>
                </Link>

                <a class="card-footer-item" onClick={() => deleteContent(content.id)}>
                  Delete
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default JobsCoba;
