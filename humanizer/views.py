from django.shortcuts import render
from .forms import TextForm
import nltk

def humanize_text(request):
    output_text = None
    if request.method == 'POST':
        form = TextForm(request.POST)
        if form.is_valid():
            input_text = form.cleaned_data['input_text']
            tokens = nltk.word_tokenize(input_text)
            tagged = nltk.pos_tag(tokens)
            output_text = ' '.join([word for word, tag in tagged])
    else:
        form = TextForm()
    return render(request, 'humanizer/index.html', {'form': form, 'output_text': output_text})



def contact(request):
  return render(request,"humanizer/contact.html")