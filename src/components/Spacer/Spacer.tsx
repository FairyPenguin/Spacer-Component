import styles from "./Spacer.module.css";

export type SpacerType = {
  space: keyof typeof spaces;
};

const spaces = {
  "0.25rem": 1,
  "0.5rem": 2,
  "0.75rem": 3,
  "1rem": 4,
  "1.25rem": 5,
  "1.5rem": 6,
  "1.75rem": 7,
  "2rem": 8,
  "2.25rem": 9,
  "2.5rem": 10,
  "2.75rem": 11,
  "3rem": 12,
  "3.25rem": 13,
  "3.5rem": 14,
  "3.75rem": 15,
  "4rem": 16,
  "4.25rem": 17,
  "4.5rem": 18,
  "4.75rem": 19,
  "5rem": 20,
  "5.25rem": 21,
  "5.5rem": 22,
  "5.75rem": 23,
  "6rem": 24,
  "6.25rem": 25,
};

export default function Spacer({ space = "0.25rem" }: SpacerType) {
  //Version with Global CSS calss
  // return <div className={`spacer${spaces[space]}`}></div>;
  return (
    // Version with CSS module class
    <div
      className={`${styles[`spacer${spaces[space]}`]} ${styles["spacer"]}`}
    ></div>
  );
}
