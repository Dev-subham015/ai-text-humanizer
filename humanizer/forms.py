from django import forms
from django_recaptcha.fields import ReCaptchaField

class TextForm(forms.Form):
    input_text = forms.CharField(widget=forms.Textarea, label='Input Text')
    captcha = ReCaptchaField()
