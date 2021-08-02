from flask import (
    Blueprint, render_template, url_for, request, redirect, current_app
)
import sendgrid
from sendgrid.helpers.mail import *
from werkzeug.wrappers import response
from python_http_client.exceptions import HTTPError


bp = Blueprint('portfolio', __name__, url_prefix="/")

@bp.route("/", methods=['GET'])
def index():
    return render_template("portfolio/index.html")

@bp.route('/mail', methods=[ 'GET','POST'])
def mail():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')
    if request.method == 'POST':
        send_email(name, email, message)
        return render_template('portfolio/sent_email.html')
    return redirect(url_for('portfolio.index'))

def send_email(name, email, message):
    mi_email = 'nahuelmatiasbenitez@gmail.com'
    sg = sendgrid.SendGridAPIClient(api_key=current_app.config['SENDGRID_KEY'])

    from_email = Email(mi_email)
    to_email = To(mi_email, substitutions={
        "-name-": name,
        "-email-": email,
        "-message-": message, 
    })

    html_content = """
        <p>Hola Nahuel, tenes un nuevo contacto desde la web: </p>
        <p>Nombre: -name-</p>
        <p>Correo: -email-</p>
        <p>Mensaje: -message-</p>
    """
    mail = Mail(mi_email, to_email, 'Nuevo contacto desde la web', html_content=html_content)
    try:
        response = sg.client.mail.send.post(request_body=mail.get())
    except HTTPError as e:
        print(e.to_dict)