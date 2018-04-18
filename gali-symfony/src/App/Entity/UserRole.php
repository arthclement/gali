<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * UserRole
 *
 * @ORM\Table(name="user_role", uniqueConstraints={@ORM\UniqueConstraint(name="iduser_role_UNIQUE", columns={"iduser_role"})}, indexes={@ORM\Index(name="role_idx", columns={"iduser", "idrole"}), @ORM\Index(name="role", columns={"idrole"}), @ORM\Index(name="IDX_2DE8C6A35E5C27E9", columns={"iduser"})})
 * @ORM\Entity
 */
class UserRole
{
    /**
     * @var int
     *
     * @ORM\Column(name="iduser_role", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $iduserRole;

    /**
     * @var \App\Entity\Role
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Role")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="idrole", referencedColumnName="idrole")
     * })
     */
    private $idrole;

    /**
     * @var \App\Entity\User
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="iduser", referencedColumnName="iduser")
     * })
     */
    private $iduser;


}
