import Joker from "./Joker";

const Joker_List = () => {
  return (
    <div>
        <Joker 
            setup="I got my daughter a fridge for her birthday." 
            punchline="I can't wait to see her face light up when she opens it." 
        />
        <Joker 
            setup="How did the hacker escape the police?" 
            punchline="He just ransomware!" 
        />
        <Joker 
            setup="Why don't pirates travel on mountain roads?" 
            punchline="Scurvy." 
        />
        <Joker 
            setup="Why do bees stay in the hive in the winter?" 
            punchline="Swarm." 
        />
        <Joker 
            setup="What's the best thing about Switzerland?" 
            punchline="I don't know, but the flag is a big plus!" 
        />
    </div>
  );
};

export default Joker_List;
