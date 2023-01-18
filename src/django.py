from django.core.mail import send_mail

def send_email(request):
    # Get the form data
    subject = request.POST.get('subject')
    message = request.POST.get('message')
    from_email = request.POST.get('from_email')
    to_email = request.POST.get('to_email')

    # Send the email
    send_mail(subject, message, from_email, [to_email])
