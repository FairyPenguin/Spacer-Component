import styles from "./Spacer.module.css";

type Spacer =
  | { space: keyof typeof spaces; blockSpace?: never }
  | { blockSpace: keyof typeof spaces; space?: never };

const spaces = {
  "0": "0",
  "0.125rem": "1",
  "0.25rem": "2",
  "0.5rem": "3",
  "0.75rem": "4",
  "1rem": "5",
  "1.25rem": "6",
  "1.5rem": "7",
  "1.75rem": "8",
  "2rem": "9",
  "2.25rem": "10",
  "2.5rem": "11",
  "2.75rem": "12",
  "3rem": "13",
  "3.25rem": "14",
  "3.5rem": "15",
  "3.75rem": "16",
  "4rem": "17",
  "4.25rem": "18",
  "4.5rem": "19",
  "4.75rem": "20",
  "5rem": "21",
  "5.25rem": "22",
  "5.5rem": "23",
  "5.75rem": "24",
  "6rem": "25",
  "6.25rem": "26",
};

export default function Spacer({
  blockSpace,
  space,
}: Spacer): React.JSX.Element {
  //Version with Global CSS calss
  // return <div className={`spacer${spaces[space]}`}></div>;
  return (
    // Version with CSS module class
    //  ${styles["spacer"]}
    <>
      {blockSpace ? (
        <div
          className={`
        ${styles[`double__spacer${spaces[blockSpace]}`]}       
        ${styles["spacer"]} 
       `}
        ></div>
      ) : null}

      {space ? (
        <div
          className={`
      ${styles[`spacer${spaces[space]}`]}        
      
      ${styles["spacer"]}
     `}
        ></div>
      ) : null}
    </>
  );
}
