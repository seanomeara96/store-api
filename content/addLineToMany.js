const { addLineToMany } = require("./modules/update");

const productIds = [
  { "Product ID": 3434 },
  { "Product ID": 3435 },
  { "Product ID": 3436 },
  { "Product ID": 3437 },
  { "Product ID": 3438 },
  { "Product ID": 3439 },
  { "Product ID": 3440 },
  { "Product ID": 3441 },
  { "Product ID": 3442 },
  { "Product ID": 3443 },
  { "Product ID": 3444 },
  { "Product ID": 3445 },
  { "Product ID": 3446 },
  { "Product ID": 3447 },
  { "Product ID": 3448 },
  { "Product ID": 3449 },
  { "Product ID": 3450 },
  { "Product ID": 3451 },
  { "Product ID": 3452 },
  { "Product ID": 3453 },
  { "Product ID": 3454 },
  { "Product ID": 3455 },
  { "Product ID": 3456 },
  { "Product ID": 3457 },
  { "Product ID": 3458 },
  { "Product ID": 3459 },
  { "Product ID": 3460 },
  { "Product ID": 3461 },
  { "Product ID": 3462 },
  { "Product ID": 3463 },
  { "Product ID": 3464 },
  { "Product ID": 3465 },
  { "Product ID": 3466 },
  { "Product ID": 3467 },
  { "Product ID": 3468 },
  { "Product ID": 3469 },
  { "Product ID": 3470 },
  { "Product ID": 3471 },
  { "Product ID": 3472 },
  { "Product ID": 3473 },
  { "Product ID": 3474 },
  { "Product ID": 3475 },
  { "Product ID": 3476 },
  { "Product ID": 3477 },
  { "Product ID": 3478 },
  { "Product ID": 3479 },
  { "Product ID": 3480 },
  { "Product ID": 3481 },
  { "Product ID": 3482 },
  { "Product ID": 3483 },
  { "Product ID": 3484 },
  { "Product ID": 3485 },
  { "Product ID": 3486 },
  { "Product ID": 3487 },
  { "Product ID": 3488 },
  { "Product ID": 3489 },
  { "Product ID": 3490 },
  { "Product ID": 3491 },
  { "Product ID": 3492 },
  { "Product ID": 3493 },
  { "Product ID": 3494 },
  { "Product ID": 3495 },
  { "Product ID": 3496 },
  { "Product ID": 3498 },
  { "Product ID": 3499 },
  { "Product ID": 3500 },
  { "Product ID": 3501 },
  { "Product ID": 3502 },
  { "Product ID": 3503 },
  { "Product ID": 3504 },
  { "Product ID": 3505 },
  { "Product ID": 3506 },
  { "Product ID": 3507 },
  { "Product ID": 3508 },
  { "Product ID": 3509 },
  { "Product ID": 3510 },
  { "Product ID": 3511 },
  { "Product ID": 3512 },
  { "Product ID": 3513 },
  { "Product ID": 3514 },
  { "Product ID": 3515 },
  { "Product ID": 3516 },
  { "Product ID": 3517 },
  { "Product ID": 3518 },
  { "Product ID": 3520 },
  { "Product ID": 3521 },
  { "Product ID": 3522 },
  { "Product ID": 3523 },
  { "Product ID": 3524 },
  { "Product ID": 3525 },
  { "Product ID": 3526 },
  { "Product ID": 3527 },
  { "Product ID": 3528 },
  { "Product ID": 3529 },
  { "Product ID": 3530 },
  { "Product ID": 3531 },
  { "Product ID": 3532 },
  { "Product ID": 3533 },
  { "Product ID": 3577 },
  { "Product ID": 3578 },
  { "Product ID": 3579 },
  { "Product ID": 3580 },
  { "Product ID": 3581 },
  { "Product ID": 3582 },
  { "Product ID": 3583 },
  { "Product ID": 3584 },
  { "Product ID": 3585 },
  { "Product ID": 3586 },
  { "Product ID": 3587 },
  { "Product ID": 3588 },
  { "Product ID": 3589 },
  { "Product ID": 3590 },
  { "Product ID": 3591 },
  { "Product ID": 3592 },
  { "Product ID": 3593 },
  { "Product ID": 3594 },
  { "Product ID": 3711 },
  { "Product ID": 3712 },
  { "Product ID": 3713 },
  { "Product ID": 3714 },
  { "Product ID": 3781 },
  { "Product ID": 3782 },
  { "Product ID": 3902 },
  { "Product ID": 3944 },
  { "Product ID": 4028 },
  { "Product ID": 4032 },
  { "Product ID": 4033 },
  { "Product ID": 4034 },
  { "Product ID": 4042 },
  { "Product ID": 4166 },
  { "Product ID": 4167 },
  { "Product ID": 4188 },
  { "Product ID": 4223 },
  { "Product ID": 4330 },
  { "Product ID": 4458 },
  { "Product ID": 4459 },
  { "Product ID": 4460 },
  { "Product ID": 4506 },
  { "Product ID": 4560 },
  { "Product ID": 4616 },
  { "Product ID": 4773 },
  { "Product ID": 4774 },
  { "Product ID": 4775 },
  { "Product ID": 4931 },
];

const lineToAdd = `<div style="padding: 12px 18px; margin-bottom: 12px; background-color: #ecdbec; border-radius: 4px; display: flex; align-items: center;">
<div style="padding-right: 12px;"><img src="https://cdn11.bigcommerce.com/s-63354/product_images/uploaded_images/gift-icon.png?t=1620198387&amp;_ga=2.1541873.1322443927.1620197854-9852056.1620197612" alt="gift icon" /></div>
<div>
<p style="margin-bottom: 0;">Get a <a href="https://www.beautyfeatures.ie/free-dermalogica-gift-with-purchase/">free gift</a> when you spend &euro;90 or more on Dermalogica</p>
</div>
</div>`;

addLineToMany(productIds, lineToAdd)
  .then((res) => console.log(res))
  .catch(() => console.log("something went wrong"));
