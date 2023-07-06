"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className=" mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard key={post.id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};
const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [post, setPost] = useState([]);

  const handleSearchChange = (e) => {};
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPost(data);
    };
    fetchPosts();
  }, []);
  return (
    <section className="feed">
      <form className=" relative w-full flex-center">
        <input
          className="search_input peer"
          type="text"
          placeholder=" Search for a tag or a username"
          onChange={handleSearchChange}
          value={searchText}
          required
        />
      </form>
      <PromptCardList key={post.id} data={post} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
