<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Appointment
 *
 * @ORM\Table(name="appointment", uniqueConstraints={@ORM\UniqueConstraint(name="idappointment_UNIQUE", columns={"idappointment"}), @ORM\UniqueConstraint(name="idcustomer_UNIQUE", columns={"idcustomer"}), @ORM\UniqueConstraint(name="idpro_UNIQUE", columns={"idpro"})}, indexes={@ORM\Index(name="customer_idx", columns={"idcustomer"}), @ORM\Index(name="pro_idx", columns={"idpro"})})
 * @ORM\Entity
 */
class Appointment
{
    /**
     * @var int
     *
     * @ORM\Column(name="idappointment", type="integer", nullable=false, options={"unsigned"=true})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idappointment;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="date", type="datetime", nullable=true)
     */
    private $date;

    /**
     * @var string|null
     *
     * @ORM\Column(name="description", type="text", length=65535, nullable=true)
     */
    private $description;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="duration", type="time", nullable=true)
     */
    private $duration;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="approved", type="boolean", nullable=true)
     */
    private $approved;

    /**
     * @var \User
     *
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="idcustomer", referencedColumnName="iduser")
     * })
     */
    private $idcustomer;

    /**
     * @var \User
     *
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="idpro", referencedColumnName="iduser")
     * })
     */
    private $idpro;


}
