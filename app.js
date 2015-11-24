$(document).ready(function () {

    
var text = [
            [
                "question": "Why did you visit today?",
                "answer":[{
                        "1": "To find Power Consumption for a device",
                        "2": "Learn about Energy Efficiency",
                        "3": "Find Energy Efficient Device",
                        "4": "Other"
                }] 
            ],
            {
                "question": "What would you like to see?",
                "answer":[{
                        "1": "something else",
                        "2": "more stuff",
                        "3": "yep",
                        "4": "Other"
                }] 
            },
            {
                "question": "gd",
                "answer":[{
                        "1": "something else",
                        "2": "more stuff",
                        "3": "yep",
                        "4": "Other"
                }] 
            }

        ]
    };
       */
    var obj = JSON.parse(employees);
    

                  
console.log( obj );

    
    
    $("#panel").delay(1000).slideToggle("slow");

    $("input[name='whyvisit']").change(function () {
        $(".q1").hide();
        $(".q2").show("slow");
    });
    $("input[name='new1']").change(function () {
        $(".q2").hide();
        $(".thankyou").show("slow");
        $("#panel").delay(4000).slideToggle("slow");
    });


});