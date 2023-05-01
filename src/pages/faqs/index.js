import en from '../../lang/en'
import es from '../../lang/es'


export default function Faqs(){
  return(
    <>
      <section className="facilities">
	<div className="container">
		<div className="row d-flex align-items-center">
			<div className="col-xl-4">
				<div className="card-contact">
											<img alt="" data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/undraw_my_app_grf2.png" className=" lazyloaded" src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/undraw_my_app_grf2.png" loading="lazy" />
										<p>Chatea con uno de nuestros consultores de inversión</p>
					<a href="https://www.treeconomy.com.co/es/contactanos/">Abrir Chat</a>
				</div>
			</div>
			<div className="col-xl-4">
				<div className="card-contact down">
											<img alt="" data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/undraw_faq_rjoy.png" className=" lazyloaded" src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/undraw_faq_rjoy.png" loading="lazy" />
										<p>La inversión sostenible puede ser sobrecogedora, revisa lo que otros han preguntado antes</p>
					<a>Preguntas y Respuestas</a>
				</div>
			</div>
			<div className="col-xl-4">
				<div className="card-contact">
											<img alt="" data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/undraw_newspaper_k72w.png" className=" lazyloaded" src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/undraw_newspaper_k72w.png" loading="lazy" />
										<p>Nuestros artículos fueron pensados en resolver algunas de tus preguntas</p>
					<a href="https://www.treeconomy.com.co/es/noticias/">Ver Noticias</a>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="faq-container">
    <div className="container">
    <div className="row">
			<div className="col-xl-12">
				<h2>Preguntas Frecuentes</h2>
			</div>
		</div>
    <div className="row">
			<div className="col-xl-12">
				<div id="accordion">

					<div className="card">
						<div className="card-header" id="headingOne">
							<h5 className="mb-0">
								<button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									¿Cómo se materializa la compra de árboles?
								</button>
							</h5>
						</div>
						<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
							<div className="card-body">
								Después de comprar sus primeros árboles, serán visibles en su cuenta como tokens, un árbol es un token, hacemos esto para simplificar las cosas en caso de que desee vender sus árboles a otro inversor de Treeconomy en otra parte del país. mundo. Se le proporcionará una geolocalización de dónde se planea plantar su árbol, luego comenzamos el proceso de plantación y lo mantendremos informado con el boletín. También puede iniciar sesión en la plataforma de treeconomy para verificar el estado financiero, las imágenes, la absorción de CO2 de sus árboles y más.
								<br/>Luego de plantados los árboles, una autoridad colombiana (ICA) hará una auditoría para verificar el número de árboles plantados, geolocalización, especies e inversionistas; Después de un par de semanas mostrarán en su sitio web la certificación de esta plantación.
							</div>
						</div>
					</div>

					<div className="card">
						<div className="card-header" id="headingTwo">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
									¿Puedo ver mis árboles en la vida real?
								</button>
							</h5>
						</div>
						<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
							<div className="card-body">
								Por supuesto, sus árboles estarán disponibles para que los visite en cualquier momento, tenga en cuenta que son suyos.
							</div>
						</div>
					</div>

					<div className="card">
						<div className="card-header" id="headingThree">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
									¿Tengo pruebas de la propiedad?
								</button>
							</h5>
						</div>
						<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
							<div className="card-body">
								Sí, cuando invierte en treeconomy, debe firmar un acuerdo de venta con nuestra organización. Después de plantar sus árboles, seremos auditados por una agencia del gobierno colombiano llamada ICA, que registrará la plantación en la base de datos nacional y emitirá un certificado un par de semanas después. Tanto el contrato de venta como el certificado de plantación se le enviarán por correo y también estarán disponibles en su cuenta. </div>
						</div>
					</div>

					<div className="card">
						<div className="card-header" id="headingFour">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
									¿Cuáles son mis obligaciones con otros propietarios de árboles en mi lote?
								</button>
							</h5>
						</div>
						<div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
							<div className="card-body">
								Treeconomy mezcla propietarios de árboles en algunos lotes para reducir el costo de reforestación e incrementar sus ingresos, esto también ayuda a distribuir el riesgo entre todos </div>
						</div>
					</div>

					<div className="card">
						<div className="card-header" id="headingFive">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
									¿Dónde estarán ubicados mis árboles?
								</button>
							</h5>
						</div>
						<div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
							<div className="card-body">
								Sus árboles serán plantados en un terreno seleccionado en Colombia, un país famoso por su biodiversidad y condiciones de suelo ultra favorables. Después de que se procese su pago, recibirá las coordenadas GPS donde se plantarán sus árboles. La ubicación estará disponible para usted en su cuenta. </div>
						</div>
					</div>

					<div className="card">
						<div className="card-header" id="headingSix">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
									¿Cuáles son los riesgos de la sostenibilidad de los árboles?
								</button>
							</h5>
						</div>
						<div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
							<div className="card-body">
								Sus árboles serán plantados en un terreno seleccionado en Colombia, un país famoso por su biodiversidad y condiciones de suelo ultra favorables. Después de que se procese su pago, recibirá las coordenadas GPS donde se plantarán sus árboles. La ubicación estará disponible para usted en su cuenta. </div>
						</div>
					</div>

					<div className="card">
						<div className="card-header" id="headingSeven">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
									¿Qué pasará si uno o algunos de mis árboles mueren?
								</button>
							</h5>
						</div>
						<div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
							<div className="card-body">
								Buenas noticias, por cada árbol en el que inviertes, plantamos dos. La razón de esto se basa en cómo funcionan en la práctica los proyectos de reforestación. En la etapa inicial de las plantaciones los árboles se plantan muy cerca unos de otros para que se protejan de las adversidades del entorno. Durante el tercer año de la plantación, eliminamos una parte de los árboles para asegurarnos de que todos reciban suficientes nutrientes del suelo. Repetimos este proceso nuevamente en el año siete dejando solo 50% de los árboles plantados originalmente.
								<br/>
								¡Buenas noticias, por cada árbol que compras, plantamos dos!, esto se debe a que después de plantar los primeros árboles, 10% de ellos mueren, entonces los reemplazamos, después del tercer año, vamos a la plantación y cortamos los (25% ) que no están creciendo bien para que no desperdicien recursos para los otros árboles, y al séptimo año lo hacemos nuevamente, el otro (15%) asegurando 495 árboles por hectárea en el momento de madurez. ¿Que esta incluido en el precio? ¿Impuestos? En el precio están incluidos todos los gastos, alquiler del terreno durante 10-11 años, mantenimiento, servicios web, impuestos notariales e impuestos de transacciones. En el momento en que vendamos la madera, te transferiremos el dinero y dependiendo de tu país tendrás que pagar diferentes impuestos sobre la renta.
							</div>
						</div>
					</div>

					<div className="card">
						<div className="card-header" id="headingEight">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
									¿Mis árboles ya están plantados?
								</button>
							</h5>
						</div>
						<div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordion">
							<div className="card-body">
								Dependiendo del lote que inviertas, recuerda que puedes comprar árboles de otros inversionistas de Treeconomy, o podemos tener algunos lotes ya sembrados y listos para que solo los compres, pero en todos los casos depende del lote y el tiempo que compres, puedes consultar en la descripción del lote después de hacer clic en ?plantar árboles? </div>
						</div>
					</div>

					<div className="card">
						<div className="card-header" id="headingNine">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
									¿Qué sucedió después de que talaron mis árboles?
								</button>
							</h5>
						</div>
						<div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordion">
							<div className="card-body">
								Después de talar sus árboles, nuestro aserradero socio Central de Maderas G&amp;S SAS y otros aserraderos en caso de necesidad pagarán la madera a precios de mercado, usted recibirá 100% de los ingresos y comenzaremos el proceso nuevamente.
								<br/>El modelo de reforestación de Treeconomy no solo piensa en el proceso de reforestación, sino que también facilita la logística para facilitar las cosas a aquellos aserraderos que piensan en obtener un mejor precio de venta.
							</div>
						</div>
					</div>

					<div className="card">
						<div className="card-header" id="headingTen">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
									¿Cuánto tiempo necesitan mis árboles para llegar a la madurez?
								</button>
							</h5>
						</div>
						<div id="collapseTen" className="collapse" aria-labelledby="headingTen" data-parent="#accordion">
							<div className="card-body">
								Estamos sembrando Gmelina que tarda solo 10 años en llegar a la madurez, es una de las más rápidas del mercado, pero no olviden que una de las razones de la velocidad son las increíbles condiciones ambientales de Colombia.
							</div>
						</div>
					</div>

					<div className="card">
						<div className="card-header" id="headingEleven">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
									¿Cuánto carbono absorbe un árbol?
								</button>
							</h5>
						</div>
						<div id="collapseEleven" className="collapse" aria-labelledby="headingEleven" data-parent="#accordion">
							<div className="card-body">
								Una hectárea de pinos absorbe unas 10 toneladas de CO2 al año, el equivalente a 8 coches de una ciudad normal y poblada, pero todo depende de algunas condiciones como la temperatura, la calidad del agua, la calidad del suelo, la exposición a la luz y el clima. Por eso Colombia está entre los mejores países del mundo para la reforestación. </div>
						</div>
					</div>

					<div className="card">
						<div className="card-header" id="headingTweleven">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTweleven" aria-expanded="false" aria-controls="collapseTweleven">
									¿Puedo decidir cuándo cortar mis árboles?
								</button>
							</h5>
						</div>
						<div id="collapseTweleven" className="collapse" aria-labelledby="headingTweleven" data-parent="#accordion">
							<div className="card-body">
								Treeconomy se enfocó en maximizar los retornos de las partes interesadas, incluido usted, por lo que nuestro equipo es responsable de decidir el momento correcto para talar árboles.
							</div>
						</div>
					</div>

					<div className="card">
						<div className="card-header" id="headingThreerten">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThreerten" aria-expanded="false" aria-controls="collapseThreerten">
									¿Puedo donar mi árbol?
								</button>
							</h5>
						</div>
						<div id="collapseThreerten" className="collapse" aria-labelledby="headingThreerten" data-parent="#accordion">
							<div className="card-body">
								Sí, puedes transferir tu árbol a quien quieras, incluso puedes ir a regalar un árbol y puedes seleccionar a quién quieres dárselo y nosotros nos encargamos del resto.
							</div>
						</div>
					</div>

					<div className="card">
						<div className="card-header" id="headingFourten">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFourten" aria-expanded="false" aria-controls="collapseFourten">
									¿Con qué frecuencia recibo dinero?
								</button>
							</h5>
						</div>
						<div id="collapseFourten" className="collapse" aria-labelledby="headingFourten" data-parent="#accordion">
							<div className="card-body">
								Recibirá dinero cuando vendamos sus árboles para obtener madera, es decir, cuando los árboles alcancen la madurez y hayan cumplido su propósito ecológico. Se le notificará días antes de este proceso y se le transferirán 100% de los ingresos, es por eso que Treeconomy es una opción increíble.
							</div>
						</div>
					</div>

					<div className="card">
						<div className="card-header" id="headingFiveten">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFiveten" aria-expanded="false" aria-controls="collapseFiveten">
									¿Cómo puedo saber el precio real de mis árboles?
								</button>
							</h5>
						</div>
						<div id="collapseFiveten" className="collapse" aria-labelledby="headingFiveten" data-parent="#accordion">
							<div className="card-body">
								El costo de venta de los árboles se puede calcular por el volumen de madera, le enviaremos actualizaciones mensuales de su crecimiento para que pueda seguirlo en la plataforma de Treeconomy, también, en caso de que necesite vender sus árboles a otras TI, pueden visitar la plantación. para confirmar nuestra información.
							</div>
						</div>
					</div>

					<div className="card">
						<div className="card-header" id="headingSixten">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSixten" aria-expanded="false" aria-controls="collapseSixten">
									¿Cómo puedo saber el precio real de venta de la madera?
								</button>
							</h5>
						</div>
						<div id="collapseSixten" className="collapse" aria-labelledby="headingSixten" data-parent="#accordion">
							<div className="card-body">
								Venderemos la madera a precios de mercado, por eso, antes de firmar un contrato de venta, recibiremos ofertas mínimas de árboles y elegiremos aquella que esté en la media o por encima, recuerda que no siempre lo más caro es lo mejor.
							</div>
						</div>
					</div>

					<div className="card">
						<div className="card-header" id="headingSeventen">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeventen" aria-expanded="false" aria-controls="collapseSeventen">
									¿Mis árboles están condicionados por el estado financiero de Treeconomy?
								</button>
							</h5>
						</div>
						<div id="collapseSeventen" className="collapse" aria-labelledby="headingSeventen" data-parent="#accordion">
							<div className="card-body">
								Cada lote plantado se registra entre los inversionistas de Treeconomy, Treeconomy solo posee la tierra, pero tendrá un contrato de alquiler con los propietarios de los árboles en ese lote, por lo que en caso de que Treeconomy se declare en bancarrota y alguien más compre la tierra, también hay que esperar a que se corte la madera. Y Central de Maderas G&amp;S SAS, una empresa mediana de 35 años, estará a cargo de la operación y pagará los ingresos a los inversionistas de Treeconomy.
								<br/>
								¡Ya pensamos en el plan A, B y C para asegurar tu inversión!
							</div>
						</div>
					</div>

					<div className="card">
						<div className="card-header" id="headingEighten">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEighten" aria-expanded="false" aria-controls="collapseEighten">
									¿Cuál es la diferencia entre la inversión de suscripción y una inversión clásica?
								</button>
							</h5>
						</div>
						<div id="collapseEighten" className="collapse" aria-labelledby="headingEighten" data-parent="#accordion">
							<div className="card-body">
								La mejor forma de hacer crecer tu dinero es ahorrando e invirtiendo una parte mensualmente, al hacerlo tendrás en algunos años una cantidad interesante que no podrías tener de otra forma, recuerda que cada pago genera un extra ingresos, por lo que la diferencia es que la inversión clásica solo hace un pago único y una inversión de suscripción, hace una pequeña inversión mensual
							</div>
						</div>
					</div>

					<div className="card">
						<div className="card-header" id="headingNineten">
							<h5 className="mb-0">
								<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNineten" aria-expanded="false" aria-controls="collapseNineten">
									¿Puede mi suscripción invertir en cualquier momento?
								</button>
							</h5>
						</div>
						<div id="collapseNineten" className="collapse" aria-labelledby="headingNineten" data-parent="#accordion">
							<div className="card-body">
								Sí, solo ve a la plataforma y cancela el pago recurrente, ¡es tan simple que no necesitas contactarnos! </div>
						</div>
					</div>

				</div>
			</div>
		</div>
    </div>

</section>
    </>
  )
}

export async function getStaticProps({locale}){

  /** En este punto debe entrar la informacion desde el endpoint
  de la api para ser enviado a los componentes por props*/
  const data = locale === "en" ? en : es

  return {
    props: {
      data
    }
  }
}