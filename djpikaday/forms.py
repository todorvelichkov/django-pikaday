from django.conf import settings
from django.forms import DateField

from .widgets import PikadayInput

DJPIKADAY = getattr(settings, 'DJPIKADAY', {})
DJPIKADAY_DATE_INPUT_FORMAT = DJPIKADAY.get('DATE_INPUT_FORMAT', "%Y-%m-%d")

class PikadayField(DateField):
    widget = PikadayInput
    input_formats = []
    
    def __init__(self, format=None):
        if format is None:
            format = DJPIKADAY_DATE_INPUT_FORMAT
        self.format = format
        if isinstance(self.widget, type):
            self.widget = self.widget(format=self.format)
        super(PikadayField, self).__init__([self.format])
    
