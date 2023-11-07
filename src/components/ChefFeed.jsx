import React from "react";
import ChefCard from "./ChefCard";

function ChefFeed() {
  return (
    <section className="maxContainer paddingContainer flexCenter flex-col border-2">
      <h2 className="text-center bold-64 mb-10 mt-10">Our Chef's</h2>
      <div className="grid grid-cols-3 w-[90%] mx-auto">
        <ChefCard
          image="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Vikas Khanna"
          exp={30}
          likes={600}
        />
        <ChefCard
          image="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Sanjeev Kapoor"
          exp={30}
          likes={600}
        />
        <ChefCard
          image="https://images.unsplash.com/photo-1559575003-fb4ee38a747d?auto=format&fit=crop&q=80&w=1886&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Ranveer Brar"
          exp={30}
          likes={600}
        />
        <ChefCard
          image="https://images.unsplash.com/photo-1559575003-fb4ee38a747d?auto=format&fit=crop&q=80&w=1886&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Kunal Kapoor"
          exp={30}
          likes={600}
        />
        <ChefCard
          image="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Saransh Goila"
          exp={30}
          likes={600}
        />
        <ChefCard
          image="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&q=80&w=1987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Sanjay Kapoor"
          exp={30}
          likes={600}
        />
      </div>
    </section>
  );
}

export default ChefFeed;
