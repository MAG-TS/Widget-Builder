const express = require('express');
const router = express.Router();

const Widget = require('../models/widget.model');
const MyDashboardWidget = require('../models/myDashboardWidget.model');

// GET
// Get Widgets
router.get('/', (req, res) => {
    Widget.find({})
        .then(widgets => {
            res.send(widgets);
        })
        .catch(err => res.status(400).json('Error ' + err));
});

// PUT 
// Update the myDashboardWidget that has the same id as the myDashboardWidget stored in the current User
router.put('/update-myDashboardWidget', (req, res) => {
   // console.log(req.body.selectedWidgetObj)
    MyDashboardWidget.findById(req.body.myDashboardWidgetId)
        .then(myDashboardWidget => {
            console.log(myDashboardWidget);
            // update the myDashboardWidget found here
           
            myDashboardWidget.widgets.push(req.body.selectedWidgetObj._id)
            myDashboardWidget.save()
                .then(() => res.json('myDashboardWidget updated!'))
                .catch(err => res.status(400).json('Error ' + err));
        })
});


// GET
// Get the widgets stored in myDashbordWidget
router.get('/my-dashboard-widgets/:_id', (req, res) => {
    // filter in documents from the “joined” collection (Widgets)
    // filter widgets that have the same id as stored in MyDashboardWidget collection
    MyDashboardWidget.aggregate([
        {
          $lookup:
            {
              from: "widgets",
              localField: "widgets",
              foreignField: "_id",
              as: "dashboardWidgets"
            }
       }
    ])
    .then(dashboardWidget => {
        res.send(dashboardWidget);
    })
    .catch(err => res.status(400).json('Error ' + err));
    
});

module.exports = router;