import swal from "sweetalert2";

export const displayAlert = async (type, message) => {
  swal.fire({
    icon: type,
    title: message,
    showConfirmButton: false,
    timer: 3000,
  });
};
