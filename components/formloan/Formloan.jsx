import { Form, Formik, Field } from 'formik';
import Swal from 'sweetalert2';
import axios from 'axios';

import styles from '../../styles/Formloan.module.css';

const FormLoan = ({cuotas,handleCuotas,prestamoEnCuotas}) => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    return (
        <Formik
            initialValues={{
              nombre: "",
              apellido: "",
              dni: "",
              once: "11",
              telefono: "",
              monto: "",
              cuotas: ""
            }}
            validate={(fields) => {
              let errors = {}
              if(!fields.nombre){
                errors.nombre = "por favor completa con un nombre"
              }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(fields.nombre)){
                errors.nombre = 'El nombre solo puede contener letras y espacios'
              }
              if(!fields.apellido){
                errors.apellido = "por favor completa con un apellido"
              }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(fields.apellido)){
                errors.apellido = 'El apellido solo puede contener letras y espacios'
              }
              if(!fields.telefono){
                errors.telefono = "sin un telefono no podremos comunicarnos contigo"
              }else if(!/^([0-9]){1,8}$/.test(fields.telefono)){
                errors.telefono = "deben ser solo numeros y maximo 8 numeros"
              }
              if(!fields.dni){
                errors.dni = "es necesario saber tu dni"
              }else if(!/^([0-9]){1,8}$/.test(fields.dni)){
                errors.dni = "deben ser solo numeros sin puntos"
              }
              if(!fields.monto){
                errors.monto = "elige un monto"
              }
              if(!cuotas){
                errors.cuotas = "¿sabias que podes devolverlo en cuotas?"
              }
              return errors
            }}
            onSubmit={(fields) => {
              console.log(fields)
              // let options = {
              //   "method": "POST",
              //   "url" : "http://localhost:3001/users/create",
              //   "header" : {
              //     ContentType: 'application/json' 
              //   },
              //   "data": {
              //     monto: fields.monto,
              //     nombre: fields.nombre,
              //     apellido: fields.apellido,
              //     telefono: fields.once.concat(fields.telefono),
              //     cuotas: cuotas
              //   }
              // }
              // axios.request(options)
              // .then(() => {
                Toast.fire({
                  icon: 'success',
                  title: 'datos enviados',
                  text: 'nos pondremos en contacto en breve'
                })
              // })
            }}
          >
            {({errors,touched,values}) => (
              <Form className={styles.form}>

                <p className={styles.monto}>${values && values.monto ? values.monto : 0}</p>
                <div className={styles.between}>
                  <label>$10.000</label>
                  <Field type="range" step="1000" min="10000" max="200000" name="monto" placeholder="$10.000"/>
                  <label>$200.000</label> 
                </div>
                {touched.monto && errors.monto && <p className={styles.error}>{errors.monto}</p>}
                <div className={styles.fullname}>
                  <div className={styles.containerName}>
                    <label>Nombre:</label>
                    <Field name="nombre" placeholder="Jonh"/>
                    {touched.nombre && errors.nombre && <p className={styles.error}>{errors.nombre}</p>}
                  </div>
                  <div className={styles.containerName}>
                    <label>Apellido:</label>
                    <Field name="apellido" placeholder="Doeh"/>
                    {touched.apellido && errors.apellido && <p className={styles.error}>{errors.apellido}</p>}
                  </div>
                </div>

                <label>D.N.I:</label>
                <Field name="dni" placeholder="99999999"/>
                {touched.dni && errors.dni && <p className={styles.error}>{errors.dni}</p>}

                <label className={styles.cuotas}>Telefono:</label>
                <div className={styles.telephone}>
                  <input placeholder="11" id="once" name="once" disabled/>
                  <Field name="telefono" id="number" placeholder="69045897"/>
                </div>
                {touched.telefono && errors.telefono && <p className={styles.error}>{errors.telefono}</p>}

                <label className={styles.cuotas}>¿En cuantas cuotas?</label>
                <div className={styles.button}>
                  <button className={cuotas === 1 ? styles.active : styles.clasic} onClick={(e) => handleCuotas(e,1)}>1 cuota</button>
                  <button className={cuotas === 3 ? styles.active : styles.clasic} onClick={(e) => handleCuotas(e,3)}>3 cuotas</button>
                  <button className={cuotas === 6 ? styles.active : styles.clasic} onClick={(e) => handleCuotas(e,6)}>6 cuotas</button>
                  <button className={cuotas === 12 ? styles.active : styles.clasic} onClick={(e) => handleCuotas(e,12)}>12 cuotas</button>
                </div>
                {touched.cuotas && errors.cuotas && <p className={styles.error}>{errors.cuotas}</p>}
                <span className={styles.cuentaTotal}>me devolverias {cuotas} cuotas de ${values && values.monto && cuotas ? prestamoEnCuotas(values.monto,cuotas) : 0}</span>
                <button className={styles.send} type="submit">Solicitar</button>
              </Form>
            )}
          </Formik>
    )
}

export default FormLoan; 