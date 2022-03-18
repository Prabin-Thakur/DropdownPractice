import Inputs from "./components/Inputs";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    
    const data = [
        {
          "rollId": "4",
          "fullName": "Manoj Adhikari",
          "staffType": "Principal",
          "shift": { "entry": "10:15", "exit": "14:00", "nearTime": "20" },
          "_id": "ldTw3e5UckVZSx03"
        },
        {
          "rollId": "5",
          "fullName": "Nirmala Raut",
          "staffType": "Vice-Principal",
          "shift": { "entry": "10:00", "exit": "16:00", "nearTime": "10" },
          "_id": "ldTw3e5UckVZSx04"
        },
        {
          "rollId": "6",
          "fullName": "Drona Prasad Banjara",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx05"
        },
        {
          "rollId": "7",
          "fullName": "Sudip Neupane",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx06"
        },
        {
          "rollId": "8",
          "fullName": "Ram Kumar Thapa",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx07"
        },
        {
          "rollId": "9",
          "fullName": "Julee Khadka",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx08"
        },
        {
          "rollId": "10",
          "fullName": "Sudan Banjara",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx09"
        },
        {
          "rollId": "11",
          "fullName": "Chinimaya Lama",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx10"
        },
        {
          "rollId": "12",
          "fullName": "Pooja Gautam",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx11"
        },
        {
          "rollId": "13",
          "fullName": "Subodh Sapkota",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx12"
        },
        {
          "rollId": "14",
          "fullName": "Susan Shrestha",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx13"
        },
        {
          "rollId": "15",
          "fullName": "Manjana Basnet",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx14"
        },
        {
          "rollId": "16",
          "fullName": "Lila Devi Dahal",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx15"
        },
        {
          "rollId": "17",
          "fullName": "Lalita Dahal",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx16"
        },
        {
          "rollId": "18",
          "fullName": "Yuma Nakarmi",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx17"
        },
        {
          "rollId": "19",
          "fullName": "Sarlee Lamichhane",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx18"
        },
        {
          "rollId": "20",
          "fullName": "Sabina KC",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx19"
        },
        {
          "rollId": "21",
          "fullName": "Prabhuram Karki",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx20"
        },
        {
          "rollId": "22",
          "fullName": "Shova Rawal",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx21"
        },
        {
          "rollId": "23",
          "fullName": "Pratima Thapa",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx22"
        },
        {
          "rollId": "24",
          "fullName": "Sushma Karki",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx23"
        },
        {
          "rollId": "25",
          "fullName": "Manish Humagain",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx24"
        },
        {
          "rollId": "26",
          "fullName": "Manisha Shrestha",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx25"
        },
        {
          "rollId": "27",
          "fullName": "Manju Maharjan ",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx26"
        },
        {
          "rollId": "28",
          "fullName": "Rojina Thapa",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx27"
        },
        {
          "rollId": "29",
          "fullName": "Deepa Thapa",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx28"
        },
        {
          "rollId": "30",
          "fullName": "Bijaya Khadka",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx29"
        },
        {
          "rollId": "31",
          "fullName": "Ashmita Sapkota",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx30"
        },
        {
          "rollId": "32",
          "fullName": "Nita Maya Thokar",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx31"
        },
        {
          "rollId": "33",
          "fullName": "Anjali Thapa",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx32"
        },
        {
          "rollId": "34",
          "fullName": "Bhawani Silwal Mahat",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx33"
        },
        {
          "rollId": "35",
          "fullName": "Anita Khulal",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx34"
        },
        {
          "rollId": "36",
          "fullName": "Sangita Ghimire",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx35"
        },
        {
          "rollId": "37",
          "fullName": "Anita Timalsina",
          "staffType": "Teacher",
          "shift": { "entry": "09:45", "exit": "16:05", "nearTime": "0" },
          "_id": "ldTw3e5UckVZSx36"
        }
      ];      

    return (
        <div>
            <Inputs data={data} />
        </div>
    );
};

export default App;