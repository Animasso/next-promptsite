"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Profil from "@components/Profil";
import { DELETE } from "@app/api/prompt/[id]/route";

const MyProfil = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    if (session?.user.id) fetchPosts();
  }, []);
  const handleEdit = (posts) => {
    router.push(`/update-prompt?id=${posts._id}`);
  };
  const handleDelete = async (posts) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt ?"
    );
    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${posts._id.toString()}`, { method: DELETE });
      } catch (error) {
        console.log("error:", error);
      }
    }
  };
  return (
    <div>
      <Profil
        name="My"
        decs="Welcome to your personalized profil page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default MyProfil;
