import { SINGLE_CRICKETER_DETAILS, UPDATED_CRICKETER_DATA } from '../constant/constants'

const initialState = {
  fundsSummary: null,
  walletDetails: null,
  allCricketerData:[
    {'id':'dhoni_1','name': 'Mahendra Singh Dhoni', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'CSK', 'average':'50.76', 'src':'http://www.espncricinfo.com/inline/content/image/1099927.html?alt=20'},
    {'id':'sehwag_2','name': 'Virendra Sehwag', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Delhi', 'average':'50.76', 'src':'http://2.bp.blogspot.com/-dlmZ0gLe6m4/UCu8nJsEBDI/AAAAAAAAAXc/ycY3hS2X-g4/s400/100630.3.jpg'},
    {'id':'kohli_3','name': 'Virat Kohli', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Bangalore', 'average':'50.76', 'src':'http://static.cricinfo.com/db/PICTURES/CMS/263600/263697.20.jpg'},
    {'id':'sharmaji_4','name': 'Rohit sharma', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Mumbai', 'average':'50.76', 'src':'http://img.dainiksaveratimes.com/Uploads/img/2017/9/15/3715092017080355.jpg'},
    {'id':'dravid_5','name': 'Rahul Dravid', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Rajasthan', 'average':'50.76', 'src':'http://static.cricinfo.com/db/PICTURES/CMS/108400/108439.1.jpg'},
    {'id':'singh_6','name': 'Yuvraj Singh', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Panjab', 'average':'50.76', 'src':'http://www.fakingnews.firstpost.com/wp-content/uploads/2016/01/yuvraj-hell412.jpg'},
    {'id':'rahul_7','name': 'KL Rahul', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Bangalore', 'average':'50.76', 'src':'https://timesofindia.indiatimes.com/thumb/msid-57569320,width-400,resizemode-4/57569320.jpg'},
    {'id':'dhawan_8','name': 'Shikhar Dhawan', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Hyderabad', 'average':'50.76', 'src':'http://www.theshillongtimes.com/wp-content/uploads/2017/09/Shikhar-Dhawan.jpeg'},
    {'id':'chahal_9','name': 'Yujvendra Chahal', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Bangalore', 'average':'50.76', 'src':'http://i.cricketcb.com/stats/img/faceImages/7910.jpg'},
    {'id':'kumar_10','name': 'Bhuvaneshvar Kumar', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Bangalore', 'average':'50.76', 'src':'http://st3.cricketcountry.com/wp-content/uploads/cricket/20140521024146.jpeg'},
    {'id':'pandya_11','name': 'Hardik Pandya', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Mumbai', 'average':'50.76', 'src':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpfw26Kk2X_09mWbAfWJlTCgvpjYU1vc_qpwDEhZiQBh7Sd6oN'},
    {'id':'ashwin_12','name': 'R Ashwin', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'CSK', 'average':'50.76', 'src':'https://www.quirkybyte.com/wp-content/uploads/2016/03/ravichandran-ashwin1.jpg'},
    {'id':'jadeja_13','name': 'Ravindra Jadeja', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'CSK', 'average':'50.76', 'src':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZ8MOgBfnWwGpz9yHdVfpB8_EQxgzO3i7svxugPhq6JztzuZg'},
    {'id':'raina_14','name': 'Suresh Raina', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'CSK', 'average':'50.76', 'src':'http://i.cricketcb.com/stats/img/faceImages/413.jpg'},
    {'id':'khan_15','name': 'Zaheer Khan', 'dob': '27-3-1983', 'testRun':'4876', 'odiRun':'9898', 'iplRun':'2000', 'twentyRun':'5481', 'ipmTeam':'Delhi', 'average':'50.76', 'src':'http://static.cricinfo.com/db/PICTURES/CMS/202600/202669.1.jpg'}
  ]
}

export default function dashboardReducer (state = initialState, action) {
  switch (action.type) {
    case SINGLE_CRICKETER_DETAILS:
      return {
        ...state,
        cricketerData: action.payload
      }
    case UPDATED_CRICKETER_DATA:
      return {
        ...state,
        allCricketerData: action.payload
      }
    default :
      return {
        ...state
      }
  }
}
