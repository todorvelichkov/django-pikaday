!function()
{
    document.onreadystatechange = function()
    {
        var state = document.readyState;

        if (state == 'complete')
        {
            load_djpikaday();
        }
    }

    if (typeof window['gettext'] == 'undefined')
    {
        window['gettext'] = function(s)
        {
            return s;
        }
    }

    var config = ['position', 'reposition', 'defaultDate', 'firstDay', 'formatStrict',
        'minDate', 'maxDate', 'yearRange', 'showWeekNumber', 'minYear', 'maxYear',
        'minMonth', 'maxMonth', 'startRange', 'endRange', 'isRTL', 'yearSuffix',
        'showMonthAfterYear', 'showDaysInNextAndPreviousMonths', 'numberOfMonths',
        'mainCalendar', 'theme'
    ];

    var parse_to_date = ['defaultDate', 'minDate', 'maxDate'];

    function load_djpikaday()
    {
        var inputs = document.querySelectorAll('[data-pikaday="true"]');

        for (var i = 0; i < inputs.length, inp = inputs[i]; ++i)
        {
            var options = {
                field: inp,
                format: inp.dataset["momentFormat"],
                additionalFormats: inp.dataset["extraFormats"] ? inp.dataset["extraFormats"].split(';') : [],
                formatStrict: true,
                i18n: {
                    previousMonth : gettext('Previous Month'),
                    nextMonth     : gettext('Next Month'),
                    months        : [
                        gettext('January'),
                        gettext('February'),
                        gettext('March'),
                        gettext('April'),
                        gettext('May'),
                        gettext('June'),
                        gettext('July'),
                        gettext('August'),
                        gettext('September'),
                        gettext('October'),
                        gettext('November'),
                        gettext('December')
                    ],
                    weekdays      : [
                        gettext('Sunday'),
                        gettext('Monday'),
                        gettext('Tuesday'),
                        gettext('Wednesday'),
                        gettext('Thursday'),
                        gettext('Friday'),
                        gettext('Saturday')
                    ],
                    weekdaysShort : [
                        gettext('Sun'),
                        gettext('Mon'),
                        gettext('Tue'),
                        gettext('Wed'),
                        gettext('Thu'),
                        gettext('Fri'),
                        gettext('Sat')
                    ]
                }
            };
            for (var key in inp.dataset) {
                if (config.indexOf(key) >= 0) {
                    if (parse_to_date.indexOf(key) >= 0) {
                        options[key] = new Date(inp.dataset[key]);
                    } else {
                        options[key] = inp.dataset[key];
                    }
                }
            };
            var picker = new Pikaday(options);
            inp.picker = picker;
        }
    }
}();
