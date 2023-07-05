import React from "react";
import PromptCard from "./PromptCard";
const Profil = ({ name, decs, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className=" head_text text-left ">
        <span className="blue_gradient">{name} Profil </span>{" "}
      </h1>
      <p className="desc text-left">{decs} </p>
      <div className=" mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post.id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profil;
